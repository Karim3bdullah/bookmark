
var siteName = document.getElementById('name'); 
var siteURL = document.getElementById('url'); 
var AllsiteContainer = [];

if (localStorage.getItem('allsitesuser') !== null) {
    AllsiteContainer = JSON.parse(localStorage.getItem('allsitesuser'));
    display();
} else {
    AllsiteContainer = [];
}

function AddSite() {
    var Allsite = {
        sitename: siteName.value,
        siteurl: siteURL.value,
    };
    AllsiteContainer.push(Allsite);
    localStorage.setItem('allsitesuser', JSON.stringify(AllsiteContainer));
    display();
    reset();
}

function display() {
    var cartona = "";
    for (var i = 0; i < AllsiteContainer.length; i++) {
        cartona += `
            <tr>
                <th>${i + 1}</th>
                <td>${AllsiteContainer[i].sitename}</td>
                <td>
                    <button class="btn btn-success">
                        <a class="fw-bold text-white text-decoration-none" target="_blank" href="${AllsiteContainer[i].siteurl}">
                            <i class="fa-regular fa-eye"></i> Visit
                        </a>
                    </button>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="Delete(${i})">
                        <i class="fa-solid fa-trash"></i> Delete
                    </button>
                </td>
            </tr>
        `;
    }
    document.getElementById('tableContent').innerHTML = cartona;
}

function reset() {
    siteName.value = "";
    siteURL.value = "";
}

function Delete(index) {
    AllsiteContainer.splice(index, 1);
    localStorage.setItem('allsitesuser', JSON.stringify(AllsiteContainer));
    display();
}

document.getElementById('submitBtn').addEventListener('click', AddSite);
