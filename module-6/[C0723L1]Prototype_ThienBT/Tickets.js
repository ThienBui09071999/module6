// Dữ liệu nhân viên (ví dụ)
let employees = [
    {
        maDv: "BV00001",
        maTV: "TV00001",
        hoTen: "Nguyễn Văn A",
        soCMND: "123456789",
        diaChi: "Hà Nội",
        dienThoai: "0123456789",
        phim: "Harry Potter",
        xuatChieu: "10/07/2024 8:40"
    },{
        maDv: "BV00002",
        maTV: "TV00002",
        hoTen: "Nguyễn Văn B",
        soCMND: "123456789",
        diaChi: "Hà Nội",
        dienThoai: "0123456789",
        phim: "Harry Potter",
        xuatChieu: "10/07/2024 8:40"
    }
    // Thêm dữ liệu nhân viên khác nếu cần
];
// Hiển thị dữ liệu nhân viên
let tbody = document.querySelector('tbody');
employees.forEach(function (employee, index) {
    let row = document.createElement('tr');
    row.classList.add('bg-white','transition-all', 'duration-500', 'hover:bg-gray-50');
    row.innerHTML = `
            <td class="">
                <div class="flex items-center py-5 px-5 ">
                    <input type="checkbox" value="" class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100">
                </div>
            </td>
            <td class="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-900 "> ${employee.maDv}</td>
            <td class="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-900 "> ${employee.maTV}</td>
            <td class="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-900"> ${employee.hoTen} </td>
            <td class="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-900"> ${employee.soCMND}r</td>
            <td class="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-900"> ${employee.dienThoai} </td>
            <td class="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-900"> ${employee.phim} </td>
            <td class="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-900"> ${employee.xuatChieu} </td>
            <td class="flex p-5 items-center gap-0.5">
                <div class="p-2 rounded-full bg-white group transition duration-300 ease-in-out hover:bg-indigo-600">
                    <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex items-center justify-center px-6 py-3 bg-indigo-700 text-white font-medium rounded-full focus:bg-indigo-600 focus:outline-none whitespace-nowrap">
                         Nhận vé
                    </button>
                </div>
            </td>

        `;
    tbody.appendChild(row);
});