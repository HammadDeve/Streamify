import React from "react";
import { useQuery } from "@tanstack/react-query";
import FriendCard from "../componenets/FriendCard";
import { getUserFriends } from "../lib/api";

const FriendsPage = () => {
  const { data: friends = [], isLoading, isError, error } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  if (isLoading) return <p className="p-6 text-center">Loading friends...</p>;
  if (isError) return <p className="p-6 text-center text-red-500">Error: {error?.message || "Unknown error"}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Friends</h1>

      {friends.length === 0 ? (
        <p>No friends found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend._id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
