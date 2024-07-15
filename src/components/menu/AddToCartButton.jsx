export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
  disabled, // إضافة خاصية disabled
}) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flying-button-parent mt-4">
      <button
        onClick={handleClick}
        className={`mt-4 bg-primary text-white rounded-full px-8 py-2 cursor-pointer
          ${disabled ? "pointer-events-none opacity-50" : ""}`}
      >
        <span>
          Add to cart{" "}
          {hasSizesOrExtras ? `(from $${basePrice})` : `$${basePrice}`}
        </span>
      </button>
    </div>
  );
}
