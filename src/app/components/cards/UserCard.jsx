import React from "react";

export default function UserCard({
   avatar = "https://i.pravatar.cc/150?img=1",
   name = "John Doe",
   email = "johndoe@example.com",
   role = "Software Engineer",
   onClick,
}) {
    return (
        <div
            onClick={onClick}
            className="max-w-sm w-full p-5 rounded-2xl shadow-lg backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer flex items-center space-x-4"
        >
            <img
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border border-white/30 shadow-md"
            />
            <div className="flex flex-col text-white">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-white/70">{email}</p>
                <span className="text-xs mt-1 text-white/60">{role}</span>
            </div>
        </div>
    );
}
