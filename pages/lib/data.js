import React from "react";

export function AllPostdata(id){
  const AllData = [
    {
      id: 1,
      title: "First Post",
      description: "My first dynamic route post description",
    },
    {
      id: 2,
      title: "Second Post",
      description: "My Second dynamic route post description",
    },
  ];
  if(id){
    return AllData.filter(post=>post.id==id)
  }
  return AllData;
};


