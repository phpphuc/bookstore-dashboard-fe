import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [productName, setProductName] = useState();
  const [danhMucList, setDanhMucList] = useState([]);
  const [tacGiaList, setTacGiaList] = useState([]);

  const fakeProduct = {
    id: 123,
    tieuDe: "Người Đài Bắc",
    gia: 179000.0,
    soLuong: 500,
    photoURL: "ndb.jpg",
    moTa: '"Bao gồm 14 truyện ngắn từng được đăng trên tờ Văn học hiện đại trong suốt thập niên 60 thế kỷ 20, lần đầu xuất bản vào năm 1971 song đến nay vẫn xếp thứ 7 trong danh sách 100 tiểu thuyết Hoa ngữ tiêu biểu thế kỷ 20, Người Đài Bắc là tác phẩm giữ thứ hạng cao nhất của một nhà văn còn tại thế trong danh sách này. "',
    danhMuc: {
      id: 1,
      tenDanhMuc: "Danh mục 1",
    },
  };

  useEffect(() => {
    // fetch("/api/danhmuc")
    //   .then(response => {
    //     setDanhMucList(response.data);
    //   })
    //   .catch(error => {
    //     console.error("Error fetching danh muc:", error);
    //   });

    // fetch("/api/tacgia")
    //   .then(response => {
    //     setTacGiaList(response.data);
    //   })
    //   .catch(error => {
    //     console.error("Error fetching tac gia:", error);
    //   });
    setProduct(fakeProduct);
    setProductName(fakeProduct.tieuDe);
    setDanhMucList([
      { id: 1, tenDanhMuc: "Danh mục 1" },
      { id: 2, tenDanhMuc: "Danh mục 2" },
    ]);
    setTacGiaList([
      { id: 1, tenTacGia: "Tac gia 1" },
      { id: 2, tenTacGia: "Tacgia 2" },
    ]);
  }, []);

  return (
    product && (
      <div className="m-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-medium text-slate-900">
              {productName}
            </h1>
          </div>
        </div>
        <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 xl:col-span-2 space-y-6">
              <div className="bg-white shadow-sm ring-1 ring-slate-200 rounded-md sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <div className="relative text-slate-500 space-y-4">
                    <div>
                      <label
                        className="block font-medium text-base text-slate-700"
                        htmlFor="name"
                      >
                        Tên sách
                      </label>
                      <input
                        className="px-3 py-2 border border-slate-300 rounded-md shadow-sm mt-1 block w-full sm:text-base text-slate-500"
                        type="text"
                        id="name"
                        placeholder="Enter product name"
                        value={product.tieuDe}
                        onChange={(e) =>
                          setProduct({ ...product, tieuDe: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block font-medium text-base text-slate-700"
                        htmlFor="price"
                      >
                        Price
                      </label>

                      <div className="relative text-slate-500 mt-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="sm:text-base">đ</span>
                        </div>

                        <input
                          className="px-3 py-2 border border-slate-300 rounded-md shadow-sm pl-7 block w-full text-slate-500 sm:text-base"
                          type="text"
                          id="price"
                          placeholder="0"
                          value={new Intl.NumberFormat().format(product.gia)}
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              gia: e.target.value.replace(/\D/g, ""),
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block font-medium text-base text-slate-700 dark:text-slate-200"
                        htmlFor="quantity"
                      >
                        Số lượng
                      </label>
                      <input
                        className="px-3 py-2 border border-slate-300 rounded-md shadow-sm mt-1 block w-full sm:text-base"
                        type="text"
                        id="quantity"
                        placeholder="Enter product quantity"
                        value={product.soLuong}
                        onChange={(e) => {
                          setProduct({
                            ...product,
                            soLuong: e.target.value.replace(/\D/g, ""),
                          });
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block font-medium text-base text-slate-700 dark:text-slate-200"
                        htmlFor="description"
                      >
                        Mô tả
                      </label>
                      <textarea
                        className="px-3 py-2 border border-slate-300 rounded-md shadow-sm mt-1 block w-full h-32 sm:text-base"
                        id="description"
                        placeholder="Enter product description"
                        value={product.moTa}
                        onChange={(e) =>
                          setProduct({ ...product, moTa: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <p className="text-gray-700">{product.description}</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 rounded-b-md sm:px-6 bg-slate-50">
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-3 py-2 bg-blue-500 rounded-md text-white font-medium hover:bg-blue-600"
                    >
                      Lưu thay đổi
                    </button>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="col-span-3 xl:col-span-1 space-y-6">
              <div className="bg-white shadow-sm ring-1 ring-slate-200 rounded-md sm:rounded-lg">
                <div className="px-4 py-5 rounded-t-md sm:px-6 sm:rounded-t-lg">
                  <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                      <h3 className="text-base font-medium text-slate-900">
                        Danh mục
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-5 sm:px-6 -mt-5">
                  <select className="block px-3 py-2 w-full ring-1 ring-slate-200 rounded-md border-slate-300 shadow-sm sm:text-base">
                    {danhMucList.map((danhMuc) => (
                      <option key={danhMuc.id} value={danhMuc.id}>
                        {danhMuc.tenDanhMuc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="bg-white shadow-sm ring-1 ring-slate-200 rounded-md sm:rounded-lg">
                <div className="px-4 py-5 rounded-t-md sm:px-6 sm:rounded-t-lg">
                  <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                      <h3 className="text-base font-medium text-slate-900">
                        Tác giả
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-5 sm:px-6 -mt-5">
                  <select className="block px-3 py-2 w-full ring-1 ring-slate-200 rounded-md border-slate-300 shadow-sm sm:text-base">
                    {tacGiaList.map((tacGia) => (
                      <option key={tacGia.id} value={tacGia.id}>
                        {tacGia.tenTacGia}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DetailProduct;
