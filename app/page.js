// Page to show all movies and songs
import axios from 'axios';

export default function Home({ data }) {
  return (
    <div>
      <h1>Movies and Songs</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(process.env.API_URL);
  const data = res.data;

  return { props: { data } };
}