Notification.requestPermission().then(perm => {
    if (perm !== "granted") return

    new Notification("My notification", {
        body: "This is more text",
        data: { hello: 'world' },
        icon: "",
        tag: "Test message"
    })

})

let notification, interval
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        const leaveDate = new Date()
        setInterval(() => {
            notification = new Notification("Come back please", {
                body: `You left the page ${Math.round((new Date() - leaveDate) / 1000)} second ago`,
                tag: "Come Back"
            })
        }, 100)
    } else {
        notification.close()
    }
})