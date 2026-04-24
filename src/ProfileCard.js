function ProfileCard({ user }) {
  return (
    <div style={{ border: "1px solid gray", padding: "20px", margin: "20px" }}>
      <img src={user.image} width="120" alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  );
}

export default ProfileCard;