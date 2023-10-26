// Mảng lưu trữ sản phẩm
let products = [];

// Hàm thêm sản phẩm mới
function addProduct() {
    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value);

    if (productName && !isNaN(productPrice)) {
        products.push({ name: productName, price: productPrice });
        updateProductList();
        clearInputFields();
    }
}

// Hàm cập nhật danh sách sản phẩm
function updateProductList() {
    const productList = document.getElementById("product-ul");
    productList.innerHTML = ""; // Xóa danh sách sản phẩm cũ

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const li = document.createElement("li");
        li.textContent = product.name + " - $" + product.price.toFixed(2);
        productList.appendChild(li);
    }
}

// Hàm xóa nội dung của các trường nhập
function clearInputFields() {
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
}
