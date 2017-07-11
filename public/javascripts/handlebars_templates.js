this["JST"] = this["JST"] || {};

this["JST"]["add_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-composer\"><div class=\"card\"><textarea class=\"autoExpand\"></textarea></div><div class=\"add-footer\"><button class=\"add\">Add</button><div class=\"remove\"></div></div></div>";
},"useData":true});

this["JST"]["add_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"add-list-container\"><button class=\"add-list\">Add a list...</button><div class=\"add-list-form\"><form action=\"#\"><input type=\"text\" placeholder=\"Add a list...\"></input><div class=\"add-footer\"><button type=\"submit\" class=\"add\">Save</button><div class=\"remove\"></div></div></form></div></div>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"subhead\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><main><div id=\"list-container\"></div></main>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"edit\"></div>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)));
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["JST"]["edit_card_window"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal\"><div class=\"modal-content\"><header><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></header><div class=\"close\"></div><main><div class=\"card-detail-labels\"><h5>Labels</h5><div class=\"label-list\"><span class=\"label\" style=\"background:#ffee00\">sahara</span><span class=\"label\" style=\"background:#ff7733\"></span><span class=\"label\" style=\"background:#66ff99\">green apple</span></div></div><div class=\"card-detail-description\"><h5>Description <a href=\"#\">Edit</a></h5><p>"
    + alias4(((helper = (helper = helpers.descriptiom || (depth0 != null ? depth0.descriptiom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descriptiom","hash":{},"data":data}) : helper)))
    + "</p></div><div class=\"add-comment\"><h2>Add Comment</h2><form action=\"#\"><textarea rows=\"3\" placeholder=\"write a comment...\"></textarea><button class=\"comment disabled\">Send</button></form></div><div class=\"comments\"><h2>Comments</h2>comments here</div></main><div class=\"sidebar\"><div class=\"card-detail-btn-group\"><h2>Add</h2><button>Labels</button><button>Due Date</button></div><div class=\"card-detail-btn-group\"><h2>Actions</h2><button>Move</button><button>Copy</button><button>Subscribe</button><button>Archive</button></div></div></div></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><header><div class=\"list-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><form action=\"#\"><textarea class=\"autoExpand\" rows=\"1\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea></form></header><div class=\"list-cards\"></div><a class=\"add-card\" href=\"#\"><footer>Add a card...</footer></a></div>";
},"useData":true});