const dataProgramStudi = {
    Mahasiswa: ["Teknik Informatika", "Teknik Biomedik", "Teknik Elektro", "Teknologi Informasi", "Teknik Komputer", "Sistem Informasi"]
}

const jenis = document.getElementById("jenis_anggota");
const program = document.getElementById("program_studi");

jenis.addEventListener("change", function() {
  const jenis_now = this.value;
  program.innerHTML = '<option value="-">--Pilih program studi--</option>';

  if (jenis_now && dataProgramStudi[jenis_now]) {
    program.disabled = false;
    dataProgramStudi[jenis_now].forEach(function (item) {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      program.appendChild(option);
    });
  } else {
    program.disabled = true;
  }
});

function validateForm(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const jenis = document.getElementById("jenis_anggota").value;
    const program = document.getElementById("program_studi").value;
    const telepon = document.getElementById("telepon").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById("alamat").value;
    
    const namaInput = document.getElementById("nama");
    const nimInput = document.getElementById("nim");
    const jenisInput = document.getElementById("jenis_anggota");
    const programInput = document.getElementById("program_studi");
    const teleponInput = document.getElementById("telepon");
    const emailInput = document.getElementById("email");
    const alamatInput = document.getElementById("alamat");

    const namaErr = document.getElementById("nama-error");
    const nimErr = document.getElementById("nim-error");
    const jenisErr = document.getElementById("jenis-error");
    const programErr = document.getElementById("program-error");
    const teleponErr = document.getElementById("telepon-error");
    const emailErr = document.getElementById("email-error");
    const alamatErr = document.getElementById("alamat-error");

    namaErr.textContent = "";
    nimErr.textContent = "";
    jenisErr.textContent = "";
    programErr.textContent = "";
    teleponErr.textContent = "";
    emailErr.textContent = "";
    alamatErr.textContent = "";

    let isValid = true;

    if (nama === "" || /\d/.test(nama)) {
        namaErr.textContent = "Nama tidak sesuai.";
        namaInput.classList.remove("border-success");
        namaInput.classList.add("border-danger");
        isValid = false;
    }else{
        namaInput.classList.remove("border-danger");
        namaInput.classList.add("border-success");
    }

    if (nim === "") {
        nimErr.textContent = "NIM/NRP tidak diketahui.";
        nimInput.classList.remove("border-success");
        nimInput.classList.add("border-danger");
        isValid = false;
    }else{
        nimInput.classList.remove("border-danger");
        nimInput.classList.add("border-success");
    }

    if (jenis === "default") {
        jenisErr.textContent = "Jenis keanggotaan tidak diketahui.";
        jenisInput.classList.remove("border-success");
        jenisInput.classList.add("border-danger");
        isValid = false;
    }else{
        jenisInput.classList.remove("border-danger");
        jenisInput.classList.add("border-success");
    }

    if (program === "default" && !document.getElementById("program_studi").disabled) {
        programErr.textContent = "Program studi tidak diketahui.";
        programInput.classList.remove("border-success");
        programInput.classList.add("border-danger");
        isValid = false;
    }else{
        programInput.classList.remove("border-danger");
        programInput.classList.add("border-success");
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Email tidak dikenali.";
        emailInput.classList.remove("border-success");
        emailInput.classList.add("border-danger");
        isValid = false;
    }else{
        emailInput.classList.remove("border-danger");
        emailInput.classList.add("border-success");
    }

    if (telepon === "") {
        teleponErr.textContent = "Nomor Telepon tidak dikenali.";
        teleponInput.classList.remove("border-success");
        teleponInput.classList.add("border-danger");
        isValid = false;
    }else{
        teleponInput.classList.remove("border-danger");
        teleponInput.classList.add("border-success");
    }

    if (alamat === "") {
        alamatErr.textContent = "Alamat tidak diketahui.";
        alamatInput.classList.remove("border-success");
        alamatInput.classList.add("border-danger");
        isValid = false;
    }else{
        alamatInput.classList.remove("border-danger");
        alamatInput.classList.add("border-success");
    }

    if (isValid) {
        alert("Form submitted successfully!");
        const nama = document.getElementById("nama").value;
        const nim = document.getElementById("nim").value;
        const jenis = document.getElementById("jenis_anggota").value;
        const program = document.getElementById("program_studi").value;
        const telepon = document.getElementById("telepon").value;
        const email = document.getElementById("email").value;
        const alamat = document.getElementById("alamat").value;

        const DataBaru = {nama, nim, jenis, program, telepon, email, alamat};

        let dataAnggota = JSON.parse(localStorage.getItem("dataPendaftar")) || [];

        dataAnggota.push(DataBaru);
        localStorage.setItem("dataPendaftar", JSON.stringify(dataAnggota));

        const allInput = [namaInput, nimInput, jenisInput, programInput, emailInput, teleponInput, alamatInput];

        allInput.forEach(input => {
            input.classList.remove("border-success", "border-danger")
        })

        document.getElementById("program_studi").disabled = true;

        document.getElementById("daftar").reset();

        return true;
    }
    else {
        return false;
    }
}