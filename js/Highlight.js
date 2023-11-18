AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string" }
    },
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id");
            console.log("current id: ", id)
            const posterId = [
                "superman",
                "spiderman",
                "captain-aero",
                "outer-space"
            ];
            if(posterId.includes(id)) {
                console.log("this is of: ", posterId.includes(id))
                const posterContainer = document.querySelector("#posters-container");
                posterContainer.setAttribute("cursor-listener", {
                    selectedItemId: id,
                });
                this.el.setAttribute("material", {color:"#1565c0"})
            }
        });
    },
    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data;
            if(selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId) {
                    el.setAttribute("material", {color:"#fff"});
                }
            }
        })
    }
})