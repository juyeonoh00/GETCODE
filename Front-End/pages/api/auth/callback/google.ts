import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  try {
    // https://oauth2.googleapis.com/token
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    const accessToken = data.access_token;

    // Google API를 사용하여 사용자 정보 가져오기
    const userInfoResponse = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`);
    const userInfo = userInfoResponse.data;

    // 필요한 로직 구현 (사용자 정보 저장, JWT 생성 등)

    // 마지막으로 사용자를 원하는 경로로 리디렉션
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authentication failed' });
  }
}
