"use client";

import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import FollowPointer from "./FollowPointer";

function LiveCursorProvider({ children }: { children: React.ReactNode }) {
  const [myPresence, updateMyPresence] = useMyPresence();
  const others = useOthers();

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    // Update from clientX and clientY to pageX and pageY for full-page cursor tracking
    const cursor = { x: Math.floor(e.pageX), y: Math.floor(e.pageY) };
    updateMyPresence({ cursor }); // Update presence with the new cursor position
  }

  function handlePointerLeave() {
    updateMyPresence({ cursor: null });
  }
console.log(JSON.stringify(myPresence.cursor));

  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {/* Render cursor for other users */}
      {others
        .filter((other) => other.presence.cursor != null)
        .map(({ connectionId, presence, info }) => (
          <FollowPointer
            key={connectionId}
            info={info}
            x={presence.cursor!.x}
            y={presence.cursor!.y}
          />
        ))}
      {children}
    </div>
  );
}

export default LiveCursorProvider;
