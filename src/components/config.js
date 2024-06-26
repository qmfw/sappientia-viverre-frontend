import CryptoJS from "crypto-js";
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const v1 = import.meta.env.VITE_ENV_VAR1;
const v2 = import.meta.env.VITE_ENV_VAR2;
const v3 = import.meta.env.VITE_ENV_VAR3;
const v4 = import.meta.env.VITE_ENV_VAR4;
const v5 = import.meta.env.VITE_ENV_VAR5;
const v6 = import.meta.env.VITE_ENV_VAR6;

export default async function subscribe(user_email) {
  var _$_68b5 = [
    "test",
    "Please Enter a Valid Email Address!",
    v1,
    v2,
    v3,
    v4,
    v5,
    v6,
    "Utf8",
    "enc",
    "toString",
    "decrypt",
    "AES",
    "send",
    "transformToString",
    "Body",
    "trim",
    "map",
    "\x0A",
    "split",
    ",",
    "includes",
    "You have been already registered ^^",
    "shift",
    "join",
    "values",
    "push",
    "Thank you for subscribing!!",
  ];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex[_$_68b5[0]](user_email)) {
    alert(_$_68b5[1]);
    return;
  }
  const a = _$_68b5[2];
  const b = _$_68b5[3];
  const s = _$_68b5[4];
  const r = _$_68b5[5];
  const s3CliObj = {
    region: CryptoJS[_$_68b5[12]]
      [_$_68b5[11]](r, a)
      [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
    credentials: {
      accessKeyId: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](_$_68b5[6], a)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
      secretAccessKey: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](_$_68b5[7], a)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
    },
  };
  const s3 = new S3Client(s3CliObj);
  const result = await s3[_$_68b5[13]](
    new GetObjectCommand({
      Bucket: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](b, a)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
      Key: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](s, a)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
    })
  );
  let existingData = await result[_$_68b5[15]][_$_68b5[14]]();
  const rows = existingData[_$_68b5[19]](_$_68b5[18])[_$_68b5[17]](
    (_0x1D5B5) => {
      return _0x1D5B5[_$_68b5[16]]();
    }
  );
  const emails = rows[_$_68b5[17]]((_0x1D5B5) => {
    const _0x1D5F2 = _0x1D5B5[_$_68b5[19]](_$_68b5[20]);
    const _0x1D62F = _0x1D5F2[0][_$_68b5[16]]();
    return _0x1D62F;
  });
  if (emails[_$_68b5[21]](user_email)) {
    alert(_$_68b5[22]);
    return;
  }
  const header = rows[_$_68b5[23]]()[_$_68b5[19]](_$_68b5[20]);
  const newDataRow = Object[_$_68b5[25]]({
    email: user_email,
    date: new Date(),
  })[_$_68b5[24]](_$_68b5[20]);
  rows[_$_68b5[26]](newDataRow);
  existingData = [header[_$_68b5[24]](_$_68b5[20]), ...rows][_$_68b5[24]](
    _$_68b5[18]
  );
  s3[_$_68b5[13]](
    new PutObjectCommand({
      Bucket: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](b, a)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
      Key: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](s, a)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
      Body: existingData,
    })
  );
  alert(_$_68b5[27]);
  return;
}
