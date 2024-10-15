function ConfrimDelete({ resourceNane, onClose, disabled, onConfrim }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف ${resourceNane} مطمعن هستید ؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          onClick={onClose}
          disabled={disabled}
          className="btn btn--primary flex-1"
        >
          لغو
        </button>
        <button
          onClick={onConfrim}
          disabled={disabled}
          className="btn btn--danger flex-1 py-3"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfrimDelete;
