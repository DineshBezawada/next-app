function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const page = () => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading Profile..");
  }
  return <h1>My Profile</h1>;
};

export default page;
