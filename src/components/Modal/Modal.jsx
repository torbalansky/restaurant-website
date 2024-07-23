import React from 'react';

const Modal = ({ isOpen, onClose, dish }) => {
  if (!isOpen || !dish) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-gradient-to-b from-white to-gray-200 p-4 max-w-lg w-full rounded-[2px] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-white bg-red-600 border-none rounded-full px-2"
        >
          &times;
        </button>
        <div className="flex justify-center mb-4">
          <img
            src={dish.img}
            alt={dish.name}
            className="w-48 h-48 object-cover rounded-full border-[2px] border-black"
          />
        </div>
        <h2 className="text-2xl mb-4 text-black text-center">{dish.name}</h2>
        <p className="text-black" ><strong>Цена:</strong> {dish.price}/ {dish.quantity}</p>
        <p className="text-black"><strong>Съставки:</strong> {dish.ingredients}</p>
        <p className="text-black"><strong>Описание:</strong> {dish.description}</p>
        <p className="text-black"><strong>Алергени:</strong> {dish.allergens}</p>
      </div>
    </div>
  );
};

export default Modal;
