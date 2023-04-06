import { useParams, useSearchParams } from "react-router-dom";
import { ProductListContent } from "./components/ProductListContent";
import { getListTitle } from "./ProductList.util";

/**
 *
 * @returns {JSX.Element}
 */
const ProductList = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  return (
    <main className="h-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:pt-16 sm:pb-24 sm:px-6 lg:px-8">
        {getListTitle(params.listId ?? "all", searchParams)}
        <div className="mt-12">
          <ProductListContent
            strBranch={params.listId ?? "all"}
            searchParams={searchParams}
          />
        </div>
      </div>
    </main>
  );
};

export { ProductList };
