import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 566717024;
    const serverSecret = "11edb682f56e7c8247fce9c912b0cfdc";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      'Soumyajit'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    })
  }
  return (
    <div className="room-page">
      <div ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
