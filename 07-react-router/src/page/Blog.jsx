import {useParams} from 'react-router-dom'
function Blog() {
    const {title} = useParams()
  return (
    <>
      <h1>Blog item {title}</h1>
    </>
  );
}
export default Blog;
