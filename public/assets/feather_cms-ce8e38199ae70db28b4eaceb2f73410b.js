$(document).ready(function(){window.codemirror_editors={},$(".codemirror_feather_cms").each(function(){var a=document.getElementById(this.id);codemirror_editors[$(this).attr("id")]=CodeMirror.fromTextArea(a,{mode:"text/html",tabMode:"indent",textWrapping:!1,lineNumbers:!0})})});