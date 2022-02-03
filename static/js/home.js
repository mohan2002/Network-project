window.onload = () => {
    $("#join").click(function(){
        let meetingID = $("#meetingID").val();
        if(meetingID !== ""){
            window.location = "/meeting/"+meetingID;
        } else {
            alert("Enter a valid meeting ID")
        }
    })
    $("#genNewMeetingID").click(function() {
        let meetingID = create_UUID();
        $("#newMeetingID").val(meetingID);
    });
    $("#copyMeetingID").click(function(){
        var copyText = document.getElementById("newMeetingID");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);      
    });
    $("#joinNewMeeting").click(function() {
        let meetingID = $("#newMeetingID").val();
        if(meetingID !== ""){
            window.location = "/meeting/"+meetingID;
        } else {
            alert("Please create a meeting.")
        }
    })
}
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
