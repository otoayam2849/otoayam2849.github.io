type Work = {
  title: string;
  category: string;
  description: string;
  role: string[];
  tools: string[];
};


export default function WorkCard({
  work
}: {
  work: Work
}) {

  return (
    <article className="border rounded-xl p-6">

      <p className="text-sm">
        {work.category}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {work.title}
      </h3>

      <p className="mt-4">
        {work.description}
      </p>


      <div className="mt-6">
        <p className="font-bold">
          Role
        </p>

        {work.role.map((item)=>(
          <span
            key={item}
            className="mr-2"
          >
            {item}
          </span>
        ))}

      </div>


      <div className="mt-4">
        <p className="font-bold">
          Tools
        </p>

        {work.tools.join(" / ")}

      </div>


    </article>
  );
}