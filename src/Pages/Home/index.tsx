import { HomeTemplate } from '../../Templates';
import { ProductsInfo, ImagesContainer } from './components';

export function Home() {
  return (
    <HomeTemplate>
      <div className="grid grid-flow-col grid-cols-2 mt-20">
        <ImagesContainer />
        <ProductsInfo className="mt-20" />
      </div>
    </HomeTemplate>
  );
}
