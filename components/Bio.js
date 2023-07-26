export default function Bio() {
  return (
    <div className="flex gap-8 ">
      <div className="shrink-0 w-32 h-32 rounded-full overflow-hidden">
        <img className="object-cover" src="./male.jpeg" />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold">Moses</h2>
        <p class="leading-snug text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          semper tempus sodales. In semper molestie metus eu ornare. Etiam et
          porta est. Etiam non pharetra risus. Vivamus efficitur placerat
          fermentum.
        </p>
      </div>
    </div>
  );
}
