import { CartIcon, MinusIcon, PlusIcon } from '@/assets';

type ProductsInfo = {
  className?: string;
};

export function ProductsInfo({ className }: ProductsInfo) {
  return (
    <div className={`${className}`}>
      <div>
        <h3 className="uppercase tracking-widest text-dark-grayish-blue font-bold text-xs mb-4  ">
          Sneaker Company
        </h3>

        <div className="w-4/5">
          <h1 className="font-bold text-4xl text-very-dark-blue mb-8">
            Fall Limited Edition Sneakers
          </h1>
        </div>
      </div>

      <p className="text-dark-grayish-blue mb-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="mb-7">
        <div className="flex gap-3 items-center mb-2">
          <h2 className="font-bold text-very-dark-blue text-2xl">$125.00</h2>
          <p className="bg-very-dark-blue text-pale-orange font-bold rounded-md text-sm px-2 py-px">
            50%
          </p>
        </div>
        <p className="line-through text-dark-grayish-blue font-bold text-sm">
          $250.00
        </p>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-8 bg-light-grayish-blue h-auto rounded-md p-3">
          <MinusIcon />
          <p className="text-very-dark-blue font-bold">0</p>
          <PlusIcon />
        </div>
        <button className="bg-primary-orange flex items-center gap-3 px-16 rounded-md">
          <CartIcon color="black" size="15" />
          <span className="font-bold text-sm">Add to cart</span>
        </button>
      </div>
    </div>
  );
}
