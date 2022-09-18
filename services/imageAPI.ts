import { SegmentResponse } from '../@types';

const getSegmentedImage = async (payload: {
  image: string;
}): Promise<SegmentResponse | undefined> => {
  try {
    const res = await fetch('https://erthasys.leveor.xyz/erthasys', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const imageAPI = {
  getSegmentedImage,
};

export default imageAPI;
