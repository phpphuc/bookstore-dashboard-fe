import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailCategory() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState();
  const [categoryName, setCategoryName] = useState();

  useEffect(() => {
    const fetchCategory = async () => {
      await fetch(
        `http://localhost:8080/api/danhmuc/getdanhmucbyid/${categoryId}`
      ).then((response) => {
        return response.json();
      }).then((response) => {
        setCategory(response);
        setCategoryName(response.tenDanhMuc);
      });
    };
    fetchCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/api/danhmuc/update/${categoryId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(category),
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Cập nhật danh mục thành công");
        window.location.reload();
      } else {
        alert("Cập nhật danh mục thất bại");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
    category && (
      <div className="m-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-medium text-slate-900">
              {categoryName}
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
                        Tên danh mục
                      </label>
                      <input
                        className="px-3 py-2 border border-slate-300 rounded-md shadow-sm mt-1 block w-full sm:text-base text-slate-500"
                        type="text"
                        id="name"
                        placeholder="Enter category name"
                        value={category.tenDanhMuc}
                        onChange={(e) =>
                          setCategory({ ...category, tenDanhMuc: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 rounded-b-md sm:px-6 bg-slate-50">
                  <div className="flex items-center justify-end">
                    <button
                      onClick = {handleSubmit}
                      className="px-3 py-2 bg-blue-500 rounded-md text-white font-medium hover:bg-blue-600"
                    >
                      Lưu thay đổi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DetailCategory;
