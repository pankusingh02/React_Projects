export  default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em> Start adding some items to your packing list</em>
      </p>
    );
  }
  const itmLength = items.length;
  const packedItems = items.filter((itme) => itme.packed);

  const percentage = Math.round((packedItems.length / itmLength) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You'v got everything covered"
          : `You have ${itmLength} items in the bag and you have already packed ${packedItems.length}(${percentage}%) `}
      </em>
      ;
    </footer>
  );
}
