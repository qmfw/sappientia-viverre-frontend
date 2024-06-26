/**
 * @param {s3} UploadLogic
 */
/*
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user_email)) {
      alert("Please Enter a Valid Email Address!");
      return;
  }
  const apiKey = "U2FsdGVkX19E6VssOLrX5fKeY2K9l07FIiBQ3eKnXvM=";
  const bucketName = "U2FsdGVkX1+pr6AZMLZZBSsVIiYRfo+2YrJ6BH/7EAaVGimgJw9Nio7PQEhl4I1m";
  const subscribeKey = "U2FsdGVkX1+FsQ5d2natQpZVgoaUMEeFskDBKethRCg=";
  const region = "U2FsdGVkX1+i1n8tsQuODo4jbM1M203ajRSYYP8k/Os=";
  const accessKeyId = "U2FsdGVkX1+8uPO1ZRFy/DMFIrjStKz1ouwQggQ0u0ml+a8rwqpzuMDX8twJaHYJ";
  const secretAccessKey = "U2FsdGVkX1/mqqKYmxxSBRUGY5+FEv4pbIWrU8TAVzpDw2AqwiES+aLGWWsmi0Dn3mE++QlJlVYlkjOi/LixsQ==";
  const s3CliObj = {
      region: CryptoJS.AES.decrypt(region, apiKey).toString(CryptoJS.enc.Utf8),
      credentials: {
          accessKeyId: CryptoJS.AES.decrypt(accessKeyId, apiKey).toString(CryptoJS.enc.Utf8),
          secretAccessKey: CryptoJS.AES.decrypt(secretAccessKey, apiKey).toString(CryptoJS.enc.Utf8),
      },
  };
  const s3 = new S3Client(s3CliObj);
  const result = await s3.send(
      new GetObjectCommand({
          Bucket: CryptoJS.AES.decrypt(bucketName, apiKey).toString(CryptoJS.enc.Utf8),
          Key: CryptoJS.AES.decrypt(subscribeKey, apiKey).toString(CryptoJS.enc.Utf8),
      })
  );
  let existingData = await result.Body.transformToString();
  const rows = existingData.split("\n").map((row) => row.trim());
  const emails = rows.map((row) => {
      const columns = row.split(",");
      const email = columns[0].trim();
      return email;
  });

  if (emails.includes(user_email)) {
      alert("You have been already registered ^^");
      return;
  }
  const header = rows.shift().split(",");
  const newDataRow = Object.values({
      email: user_email,
      date: new Date(),
  }).join(",");
  rows.push(newDataRow);
  existingData = [header.join(","), ...rows].join("\n");
  s3.send(
      new PutObjectCommand({
          Bucket: CryptoJS.AES.decrypt(bucketName, apiKey).toString(CryptoJS.enc.Utf8),
          Key: CryptoJS.AES.decrypt(subscribeKey, apiKey).toString(CryptoJS.enc.Utf8),
          Body: existingData,
      })
  );
  alert("Thank you for subscribing!!");
  return;
*/

import CryptoJS from "crypto-js";
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

export default async function subscribe(user_email) {
  var _$_68b5 = [
    "test",
    "Please Enter a Valid Email Address!",
    "U2FsdGVkX19E6VssOLrX5fKeY2K9l07FIiBQ3eKnXvM=",
    "U2FsdGVkX1+pr6AZMLZZBSsVIiYRfo+2YrJ6BH/7EAaVGimgJw9Nio7PQEhl4I1m",
    "U2FsdGVkX1+FsQ5d2natQpZVgoaUMEeFskDBKethRCg=",
    "U2FsdGVkX1+i1n8tsQuODo4jbM1M203ajRSYYP8k/Os=",
    "U2FsdGVkX1+8uPO1ZRFy/DMFIrjStKz1ouwQggQ0u0ml+a8rwqpzuMDX8twJaHYJ",
    "U2FsdGVkX1/mqqKYmxxSBRUGY5+FEv4pbIWrU8TAVzpDw2AqwiES+aLGWWsmi0Dn3mE++QlJlVYlkjOi/LixsQ==",
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
  const apiKey = _$_68b5[2];
  const bucketName = _$_68b5[3];
  const subscribeKey = _$_68b5[4];
  const region = _$_68b5[5];
  const accessKeyId = _$_68b5[6];
  const secretAccessKey = _$_68b5[7];
  const s3CliObj = {
    region: CryptoJS[_$_68b5[12]]
      [_$_68b5[11]](region, apiKey)
      [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
    credentials: {
      accessKeyId: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](accessKeyId, apiKey)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
      secretAccessKey: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](secretAccessKey, apiKey)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
    },
  };
  const s3 = new S3Client(s3CliObj);
  const result = await s3[_$_68b5[13]](
    new GetObjectCommand({
      Bucket: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](bucketName, apiKey)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
      Key: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](subscribeKey, apiKey)
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
        [_$_68b5[11]](bucketName, apiKey)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
      Key: CryptoJS[_$_68b5[12]]
        [_$_68b5[11]](subscribeKey, apiKey)
        [_$_68b5[10]](CryptoJS[_$_68b5[9]][_$_68b5[8]]),
      Body: existingData,
    })
  );
  alert(_$_68b5[27]);
  return;
}
