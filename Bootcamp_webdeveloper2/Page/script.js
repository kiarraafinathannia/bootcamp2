const products = [
    {
        Image:'../Component/Rectangle 963.png',
        title: 'Web Development Bootcamp',
        subtitle: 'Batch 12',
    },
    {
        Image:'../Component/Rectangle 963.png',
        title: 'Web Development Bootcamp',
        subtitle: 'Batch 12',
    },
    {
        Image:'../Component/Rectangle 963.png',
        title: 'Web Development Bootcamp',
        subtitle: 'Batch 12',
    },
    {
        Image:'../Component/Rectangle 963.png',
        title: 'Web Development Bootcamp',
        subtitle: 'Batch 12',
    },
    {
        Image:'../Component/Rectangle 963.png',
        title: 'Web Development Bootcamp',
        subtitle: 'Batch 12',
    },
    {
        Image:'../Component/Rectangle 963.png',
        title: 'Web Development Bootcamp',
        subtitle: 'Batch 12',
    },
];


function renderProductCards(){
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = '';

    products.forEach(product => {
        // const discountedPrice = calculateDiscountedPrice(product.price);

        const productCard = `
            <a href="Details.html" class="block w-[384px] bg-white shadow-lg border-gray-200 border-solid rounded-md hover:shadow-xl transition-shadow duration-200">
                <img
                    alt="Product Image"
                    src="${product.Image}"
                    class="rounded-t-md"
                />
                <div class="py-4 px-8 space-y-1">
                    <p class="text-xl font-semibold text-[#101828]">
                        ${product.title}
                    </p>
                    <p class="text-md font-regular text-[#667085]">
                        ${product.subtitle}
                    </p>
                </div>
                <div class="py-4 px-8 space-y-4">
                    <div class="flex space-x-3">
                        <img
                            alt="Check Icon"
                            src="../Component/Check icon.png"
                        />
                        <p class="text-md font-regular text-[#667085]">
                            Certified Mentor
                        </p>
                    </div>
                    <div class="flex space-x-3">
                        <img
                            alt="Check Icon"
                            src="../Component/Check icon.png"
                        />
                        <p class="text-md font-regular text-[#667085]">
                            Integrated Module
                        </p>
                    </div>
                    <div class="flex space-x-3">
                        <img
                            alt="Check Icon"
                            src="../Component/Check icon.png"
                        />
                        <p class="text-md font-regular text-[#667085]">
                            Online Class
                        </p>
                    </div>
                    <div class="flex space-x-3">
                        <img
                            alt="Check Icon"
                            src="../Component/Check icon.png"
                        />
                        <p class="text-md font-regular text-[#667085]">
                            Active Community
                        </p>
                    </div>
                </div>
                <div class="px-8 py-2 flex justify-between">
                    <s class="text-md font-normal text-[#667085]">Rp. 1.499.000</s>
                    <p class="text-xl font-bold text-[#101828]">Rp 899.000</p>
                </div>
                <div class="flex justify-center p-8">
                    <button class="text-md font-semibold text-white bg-[#7F56D9] px-5 py-3 rounded-md w-80 h-12">
                        Daftar Sekarang
                    </button>
                </div>
            </a>
        `;
        productListDiv.innerHTML += productCard;
    });
}



window.onload = renderProductCards;
