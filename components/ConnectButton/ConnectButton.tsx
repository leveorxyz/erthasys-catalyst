import { InjectedConnector } from 'wagmi/connectors/injected';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button, Text, HStack, Avatar, useToast } from '@chakra-ui/react';

const ConnectButton = () => {
  const { connectAsync } = useConnect({ connector: new InjectedConnector() });
  const { disconnectAsync } = useDisconnect();
  const { isConnected, address } = useAccount();
  const toast = useToast();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }
    try {
      await connectAsync();
    } catch (e) {
      toast({
        title: 'Oops, something is wrong...',
        description: (e as { message: string })?.message,
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const handleDisconnect = async () => {
    await disconnectAsync();
  };

  if (address) {
    return (
      <HStack onClick={handleDisconnect} cursor={'pointer'}>
        <Avatar size="sm" />
        <Text fontWeight="medium">{`${address.slice(0, 4)}...${address.slice(-4)}`}</Text>
      </HStack>
    );
  }

  return (
    <Button
      onClick={handleAuth}
      _hover={{
        backgroundColor: 'green.100',
      }}
      background="brand.100"
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectButton;
