import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'Shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'Tshirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'Shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Blazer'
    },
   
]

const Category = () => {
    // navigate 
    const navigate = useNavigate();

    return (<>
    </>
        // <div>
        //     <div className="flex flex-col mt-5">
        //         {/* main 1 */}
        //         <div className="flex overflow-x-scroll justify-center hide-scroll-bar">
        //             {/* main 2  */}
        //             <div className="flex">
        //                 {/* category  */}
        //                 {category.map((item, index) => {
        //                     return (
        //                         <div key={index} className="px-3 lg:px-10">
        //                             {/* Image  */}
        //                             <div onClick={() => navigate(`/category/${item.name}`)} className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-black transition-all hover:bg-gray-900 cursor-pointer mb-1">
        //                                 <div className="flex justify-center mb-12">
        //                                     {/* Image tag  */}
        //                                     <img src={item.image} alt="img" />
        //                                 </div>
        //                             </div>

        //                             {/* Name Text  */}
        //                             <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase text-black'>{item.name}</h1>
        //                         </div>
        //                     )
        //                 })}
        //             </div>
        //         </div>
        //     </div>

        //     {/* style  */}
        //     <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        // </div>
    );
}

export default Category;
