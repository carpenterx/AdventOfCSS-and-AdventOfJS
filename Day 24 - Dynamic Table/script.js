const data = [{
        id: 1,
        name: 'Cameron Williamson',
        email: 'cameron.wiliamson@example.com',
        title: 'Software Developer'
    },
    {
        id: 2,
        name: 'Jenny Wilson',
        email: 'jenny.wilson@example.com',
        title: 'Project Manager'
    },
    {
        id: 3,
        name: 'Jane Cooper',
        email: 'jane.cooper@example.com',
        title: 'Marketing Coordinator'
    },
    {
        id: 4,
        name: 'Wade Warren',
        email: 'wade.warren@example.com',
        title: 'Software Tester'
    },
    {
        id: 5,
        name: 'Esther Howard',
        email: 'esther.howard@example.com',
        title: 'Web Designer'
    },
    {
        id: 6,
        name: 'Kristin Watson',
        email: 'kristin.watson@example.com',
        title: 'Marketing Coordinator'
    },
    {
        id: 7,
        name: 'Esther Howard',
        email: 'esther.howard@example.com',
        title: 'Web Designer'
    },
    {
        id: 8,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 9,
        name: 'Ralph Edwards',
        email: 'ralph.edwards@example.com',
        title: 'Software Tester'
    },
    {
        id: 10,
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 11,
        name: 'Willie Jennings',
        email: 'willie.jennings@example.com',
        title: 'Team Leader'
    },
    {
        id: 12,
        name: 'Neveah Simmons',
        email: 'neveah.simmons@example.com',
        title: 'Team Leader'
    },
    {
        id: 13,
        name: 'Theresa Webb',
        email: 'theresa.webb@example.com',
        title: 'Software Tester'
    },
    {
        id: 14,
        name: 'Debbe Baker',
        email: 'debbe.baker@example.com',
        title: 'Software Developer'
    },
    {
        id: 15,
        name: 'Ronald Richards',
        email: 'ronald.richards@example.com',
        title: 'Software Developer'
    },
    {
        id: 16,
        name: 'Deanna Curtis',
        email: 'deanna.curtis@example.com',
        title: 'Scrum Master'
    },
    {
        id: 17,
        name: 'Felicia Reid',
        email: 'felicia.reed@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 18,
        name: 'Jessie Alexander',
        email: 'jessie.alexander@example.com',
        title: 'Project Manager'
    },
    {
        id: 19,
        name: 'Sam Smith',
        email: 'sam.smith@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 20,
        name: 'Eleanor Rigby',
        email: 'eleanor.rigby@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 21,
        name: 'Devon Lane',
        email: 'devon.lane@example.com',
        title: 'Team Leader'
    },
    {
        id: 22,
        name: 'Guy Hawkins',
        email: 'guy.hawkins@example.com',
        title: 'Team Leader'
    },
    {
        id: 23,
        name: 'Jim Parks',
        email: 'jim.parks@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 24,
        name: 'Susanne Ford',
        email: 'susanne.ford@example.com',
        title: 'Software Developer Manager'
    },
    {
        id: 25,
        name: 'Kathryn Murphy',
        email: 'kathryn.murphy@example.com',
        title: 'Project Manager'
    },
    {
        id: 26,
        name: 'Cody Fisher',
        email: 'cody.fisher@example.com',
        title: 'Software Developer'
    },
    {
        id: 27,
        name: 'Jane Cooper',
        email: 'jane.cooper@example.com',
        title: 'Software Tester'
    },
    {
        id: 28,
        name: 'Karen MacAfee',
        email: 'karen.macafee@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 29,
        name: 'Dianne Russell',
        email: 'dianne.russell@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 30,
        name: 'Bessie Cooper',
        email: 'bessie.cooper@example.com',
        title: 'Scrum Master'
    },
]

const rowsContainer = document.querySelector(".rows")

const sortByIdBtn = document.getElementById("id-sort")
const sortByNameBtn = document.getElementById("name-sort")
const sortByEmailBtn = document.getElementById("email-sort")
const sortByJobBtn = document.getElementById("job-sort")

const results = document.querySelector(".results")

const previousPageBtn = document.getElementById("previous-page")
const nextPageBtn = document.getElementById("next-page")

const currentPageLabel = document.getElementById("current-page-label")
const totalPagesLabel = document.getElementById("total-pages-label")

var sortByProperty = "id"
var sortDirection = "ascending"
var startingPage = 1
var currentPage = 1
const itemsPerPage = 10
const totalPages = Math.ceil(data.length / itemsPerPage) 

results.innerText = `${itemsPerPage} Results`

sortByIdBtn.addEventListener("click", SortByID)
sortByNameBtn.addEventListener("click", SortByName)
sortByEmailBtn.addEventListener("click", SortByEmail)
sortByJobBtn.addEventListener("click", SortByJob)

previousPageBtn.addEventListener("click", ShowPreviousPage)
nextPageBtn.addEventListener("click", ShowNextPage)

DisplayRows()

function ShowPreviousPage() {
    if (currentPage > 1) {
        currentPage--
        DisplayRows()
        UpdatePageDisplay()
    }
}

function ShowNextPage() {
    if (currentPage < 3) {
        currentPage++
        DisplayRows()
        UpdatePageDisplay()
    }
}

function UpdatePageDisplay() {
    currentPageLabel.innerText = currentPage
    totalPagesLabel.innerText = totalPages
}

function DisplayRows() {
    rowsContainer.innerHTML = ""
    for (let i = (currentPage - 1) * itemsPerPage; i < currentPage * itemsPerPage; i++) {
        rowsContainer.innerHTML += GenerateRow(data[i])
    }
}

function SortByID() {
    RemoveSortingClasses()
    if (sortByProperty == "id") {
        if (sortDirection == "ascending") {
            sortDirection = "descending"
            sortByIdBtn.classList.add("descending")
            data.sort(CompareIdsDescending)
        } else {
            sortDirection = "ascending"
            sortByIdBtn.classList.add("ascending")
            data.sort(CompareIdsAscending)
        }
    } else {
        sortDirection = "ascending"
        sortByIdBtn.classList.add("ascending")
        data.sort(CompareIdsAscending)
    }
    sortByProperty = "id"
    
    DisplayRows()
}

function SortByName() {
    RemoveSortingClasses()
    if (sortByProperty == "name") {
        if (sortDirection == "ascending") {
            sortDirection = "descending"
            sortByNameBtn.classList.add("descending")
            data.sort(CompareNamesDescending)
        } else {
            sortDirection = "ascending"
            sortByNameBtn.classList.add("ascending")
            data.sort(CompareNamesAscending)
        }
    } else {
        sortDirection = "ascending"
        sortByNameBtn.classList.add("ascending")
        data.sort(CompareNamesAscending)
    }
    sortByProperty = "name"
    
    DisplayRows()
}

function SortByEmail() {
    RemoveSortingClasses()
    if (sortByProperty == "email") {
        if (sortDirection == "ascending") {
            sortDirection = "descending"
            sortByEmailBtn.classList.add("descending")
            data.sort(CompareEmailsDescending)
        } else {
            sortDirection = "ascending"
            sortByEmailBtn.classList.add("ascending")
            data.sort(CompareEmailsAscending)
        }
    } else {
        sortDirection = "ascending"
        sortByEmailBtn.classList.add("ascending")
        data.sort(CompareEmailsAscending)
    }
    sortByProperty = "email"
    
    DisplayRows()
}

function SortByJob() {
    RemoveSortingClasses()
    if (sortByProperty == "job") {
        if (sortDirection == "ascending") {
            sortDirection = "descending"
            sortByJobBtn.classList.add("descending")
            data.sort(CompareJobsDescending)
        } else {
            sortDirection = "ascending"
            sortByJobBtn.classList.add("ascending")
            data.sort(CompareJobsAscending)
        }
    } else {
        sortDirection = "ascending"
        sortByJobBtn.classList.add("ascending")
        data.sort(CompareJobsAscending)
    }
    sortByProperty = "job"
    
    DisplayRows()
}

function RemoveSortingClasses() {
    sortByIdBtn.classList.remove("ascending")
    sortByNameBtn.classList.remove("ascending")
    sortByEmailBtn.classList.remove("ascending")
    sortByJobBtn.classList.remove("ascending")
    sortByIdBtn.classList.remove("descending")
    sortByNameBtn.classList.remove("descending")
    sortByEmailBtn.classList.remove("descending")
    sortByJobBtn.classList.remove("descending")
}

function CompareIdsAscending(a, b) {
    if (a.id < b.id) {
        return -1
    }
    if (a.id > b.id) {
        return 1
    }
    return 0
}

function CompareIdsDescending(a, b) {
    if (a.id < b.id) {
        return 1
    }
    if (a.id > b.id) {
        return -1
    }
    return 0
}

function CompareNamesAscending(a, b) {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
}

function CompareNamesDescending(a, b) {
    if (a.name < b.name) {
        return 1
    }
    if (a.name > b.name) {
        return -1
    }
    return 0
}

function CompareEmailsAscending(a, b) {
    if (a.email < b.email) {
        return -1
    }
    if (a.email > b.email) {
        return 1
    }
    return 0
}

function CompareEmailsDescending(a, b) {
    if (a.email < b.email) {
        return 1
    }
    if (a.email > b.email) {
        return -1
    }
    return 0
}

function CompareJobsAscending(a, b) {
    if (a.title < b.title) {
        return -1
    }
    if (a.title > b.title) {
        return 1
    }
    return 0
}

function CompareJobsDescending(a, b) {
    if (a.title < b.title) {
        return 1
    }
    if (a.title > b.title) {
        return -1
    }
    return 0
}

function GenerateRow(person) {
    return `
                <div class="row">
                    <div class="id-cell id">${person.id}</div>
                    <div class="name-cell name bold-text">${person.name}</div>
                    <div class="email-cell email">${person.email}</div>
                    <div class="job-cell job">${person.title}</div>
                    <div class="icon-cell icon"><img src="images/edit.svg" alt="edit"></div>
                </div>
    `
}