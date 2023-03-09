export function SearchUser({ userPosts, user, setsearchBar }) {
  return (
    <>
      <div>Pagina do Usuario</div>
      <br></br>

      <input
        type={"text"}
        placeholder={"pesquise um usuario"}
        onChange={(e) => setsearchBar(e.target.value)}
      ></input>

      <p>foto do Usuario: {user.user_url}</p>
      <br></br>
      <p>nome do usuario: {user.username}</p>
      <br></br>
      <p>Texto do post: {userPosts[0].headline}</p>
      <br></br>
      <p>URL do post: {userPosts[0].post_url}</p>
    </>
  );
}
