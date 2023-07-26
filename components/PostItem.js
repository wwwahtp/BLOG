export default function PostItem(props) {
  return (
    <div className="py-3 border-b border-slate-300 flex flex-col gap-3">
      <a href={'posts/' + props.slug}>
        <h2 className="text-2xl font-bold">{props.title}</h2>
      </a>
      <p>{props.excerpt}</p>
      <p className="text-slate-500">
        {props.author} - {props.date}
      </p>
    </div>
  );
}
