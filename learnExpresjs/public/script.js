fetch("/hi", {
    method: "post",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        name:"Mike"
    })
});

