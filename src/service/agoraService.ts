import { asyncHandler } from "../utils/asyncHandler";
import { RtcTokenBuilder, RtcRole } from 'agora-access-token';

function createChannel(roomName: string) {
    const appId = process.env.AGORA_APP_ID as string;
    const appCertificate = process.env.AGORA_CERTIFICATE_ID as string;
    const channelName = roomName;   

    const uid = 0;  
    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600;

    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    const token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
    console.log("Generated token:", token);
    return token;
}

export const createRoomController = asyncHandler(async (req, res) => {
    // const roomName = req.body();
    createChannel('room1')
    // res.send('Room Created');
})

