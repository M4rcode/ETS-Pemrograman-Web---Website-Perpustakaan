if(localStorage.getItem("isLoggedIn") !== "true"){
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const dataAnggota = JSON.parse(localStorage.getItem("dataPendaftar")) || [];
    const tbody = document.querySelector(".table tbody");

    dataAnggota.forEach((data, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td style="background-color: #FAFAFA;">${index + 1}</td>
            <td>${data.nim}</td>
            <td>${data.nama}</td>
            <td>${data.program}</td>
            <td>${data.jenis}</td>
            <td>${data.email}</td>
            <td>${data.telepon}</td>
            <td>${data.alamat}</td>
            <td>
                <div class="submit_button">
                    <button style="background-color: #5CCCFC;">
                        <img src="images/edit.png"> 
                    </button>
                    <button style="background-color: #D04343;" onclick="hapusData(${index})">
                        <img src="images/trash.png"> 
                    </button>
                </div>
            </td>
        `;

        tbody.appendChild(tr);
    });
})

function hapusData(index) {
    let dataAnggota = JSON.parse(localStorage.getItem("dataPendaftar")) || [];

    dataAnggota.splice(index, 1);

    localStorage.setItem("dataPendaftar", JSON.stringify(dataAnggota));

    location.reload();
}