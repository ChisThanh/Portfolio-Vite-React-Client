import { projects } from "../stores/data";
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import MarkdownReader from "../components/MarkdownReader";



export default function ProjectItem() {
  let { slug } = useParams();
  const navigate = useNavigate();
  const item = projects.find((project) => project.slug === slug);

  useEffect(() => {
    if (!item) {
      navigate("/");
    }
  }, [item, navigate]);

  return (
      <div className="mb-10">
        <div className="text-white">
          <h1 className="text-3xl font-bold text-center mb-5">{item?.name}</h1>
          <p className="text-xl font-bold text-center mb-5">{item?.date}</p>
        </div>
        <div className="w-full flex justify-center items-center rounded-md">
          <img src={item?.image} alt={item?.name} className="max-h-[20rem] rounded-md" />
        </div>
        <div className="mt-5 flex justify-center items-center">
          <MarkdownReader filePath={item?.file ?? ""} />
        </div>
      </div>
  );
}
