    var barang = [
      {
        kode: 'b01',
        nama: 'Komputer',
        harga: 500000
      },
      {
        kode: 'b02',
        nama: 'Laptop',
        harga: 150000
      },
      {
        kode: 'b03',
        nama: 'Handphone',
        harga: 400000
      }
    ];

    var cart = [];
    console.log(cart);

    let tbBarang = '';
    let cartList = '';
    barang.forEach((brg, i) => {
      tbBarang +=
      `<tr  key="${i}">
        <td>${brg.nama}</td>
        <td>${brg.harga}</td>
        <td><button onclick='tambah("${brg.kode}")' type="button" id="tambah">Tambah</button>
      </tr>`;
    });

    const list = document.querySelector('tbody.barang')
    list.innerHTML = tbBarang;
    //
    // const trBaru = document.createElement(tbBarang)

    function tambah(kode) {
      let barangCart = barang.find(brg => {
        return brg.kode === kode
      });
      cart.push({barang : barangCart, qty : 1});


      cart.forEach((crt, i) => {
        cartList +=
        `<tr key='${i}'>
          <td>${crt.barang.nama}</td>
          <td>${crt.barang.harga}</td>
          <td>${crt.qty}</td>
          <td>
            <button onclick='hapus("${crt.barang.kode}")' type="button">Delete</button>
          </td>`
      });
    }


    const listCart = document.querySelector('tbody.cart')
    listCart.innerHTML = cartList;

