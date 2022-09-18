import {
  Box,
  VStack,
  Text,
  Heading,
  Button,
  Flex,
  Input,
  useBoolean,
  useToast,
  Progress,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiSearchFill, RiAwardFill, RiStarFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { FaFileUpload } from "react-icons/fa";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";
import FormInput from "../FormInputs/FormInput";
import { db, storage } from "../../firebase";
import { useRouter } from "next/router";

interface FormData {
  instanceGoals: string;
  milestones: string;
  rewards: string;
  attachment: string;
}

const SubmitProgramForm = () => {
  const [isLoading, setIsLoading] = useBoolean(false);
  const [isFileHoverOnDrop, setFileHoverOnDrop] = useState(false);
  const [progressPercent, setProgresspercent] = useState(0);
  const [file, setFile] = useState<File>();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const toast = useToast();

  const handleFormSubmit = async (data: FormData) => {
    if (!file) return;
    const { attachment, ...rest } = data;
    try {
      setIsLoading.on();
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          toast({ status: "error", description: JSON.stringify(error) });
          setIsLoading.off();
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(collection(db, "programs"), {
              ...rest,
              file: downloadURL,
              created: Timestamp.now(),
            });
            reset();
            setProgresspercent(0);
            setFile(undefined);
            setIsLoading.off();

            toast({
              status: "success",
              description: "Proposal created successfully!",
            });
          });
        }
      );
    } catch (err) {
      setIsLoading.off();
      toast({ status: "error", description: JSON.stringify(err) });
    }
  };

  return (
    <Box bg="white" borderRadius={10} px={6} py={4}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <VStack gap={5}>
          <Box textAlign="center">
            <Heading size="sm">Submit Proposal</Heading>
          </Box>
          <FormInput
            placeholder="Instance Goals"
            icon={RiSearchFill}
            register={register("instanceGoals", { required: true })}
            isInvalid={!!errors?.instanceGoals}
          />
          <FormInput
            placeholder="Milestones"
            icon={RiStarFill}
            register={register("milestones", { required: true })}
            isInvalid={!!errors?.milestones}
          />
          <FormInput
            placeholder="Rewards"
            icon={RiAwardFill}
            register={register("rewards", { required: true })}
            isInvalid={!!errors?.rewards}
          />

          <Box
            w="full"
            onDragEnter={() => {
              setFileHoverOnDrop(true);
            }}
            onDragLeave={() => {
              setFileHoverOnDrop(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setFileHoverOnDrop(true);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setFileHoverOnDrop(false);
              if (e.dataTransfer.files) {
                setFile(e.dataTransfer.files[0]);
              }
            }}
          >
            <Input
              placeholder="File"
              accept="application/pdf"
              hidden
              id="browse-file-button"
              border="none"
              focusBorderColor="brand.100"
              bg="offwhite.100"
              _placeholder={{ color: "gray.500" }}
              type="file"
              {...register("attachment", { required: true })}
              onChange={(e: any) => {
                setFile(e.target.files[0] ?? undefined);
              }}
            />
            <label htmlFor="browse-file-button">
              <Box
                border="gray.400"
                bg="offwhite.100"
                _placeholder={{ color: "gray.500" }}
                borderStyle={isFileHoverOnDrop ? "dashed" : "solid"}
                pr={2}
                pl={3}
                py={2}
                borderRadius={6}
                color="gray.500"
                borderWidth={errors?.attachment ? "2px" : "1px"}
                borderColor={errors?.attachment ? "red" : "gray.400"}
              >
                {file ? (
                  <Flex w="full" justify="space-between" alignItems="center">
                    <Text>{file.name}</Text>
                    <FaFileUpload />
                  </Flex>
                ) : (
                  <Flex w="full" justify="space-between" alignItems="center">
                    <Text>
                      Drop your document here, or{" "}
                      <span color="#fff5">Browse</span>
                    </Text>
                    <FaFileUpload />
                  </Flex>
                )}
              </Box>
            </label>

            {!!progressPercent && (
              <Progress
                colorScheme="green"
                size="sm"
                value={progressPercent}
                mt={3}
              />
            )}
          </Box>

          <Flex experimental_spaceX={6} justify="end">
            <Button background="red.400" onClick={() => router.push("/")}>
              Cancel
            </Button>
            <Button
              _hover={{
                backgroundColor: "green.100",
              }}
              background="green.400"
              type="submit"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default SubmitProgramForm;
