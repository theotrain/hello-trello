this["JST"] = this["JST"] || {};

this["JST"]["add_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-composer nodrag\"><div class=\"card\"><textarea class=\"autoExpand\"></textarea></div><div class=\"add-footer\"><button class=\"add\">Add</button><div class=\"remove\"></div></div></div>";
},"useData":true});

this["JST"]["add_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"add-list-container\"><button class=\"add-list\">Add a list...</button><div class=\"add-list-form\"><form action=\"#\"><input type=\"text\" placeholder=\"Add a list...\"></input><div class=\"add-footer\"><button type=\"submit\" class=\"add\">Save</button><div class=\"remove\"></div></div></form></div></div>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"subhead\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><main id=\"scrollbar-style\"><div id=\"list-container\"></div></main>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"edit\"></div><div class=\"card-labels\"></div>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)));
},"useData":true});

this["JST"]["date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"date-view\"><header>Change Due Date</header><div class=\"close\"></div><div class=\"date-entry-section\"><span class=\"date-entry\"><p>Date</p><input name=\"date\"></span><span class=\"date-entry\"><p>Time</p><input name=\"time\"></span></div><div class=\"date-picker\"></div><div class=\"date-buttons\"><button class=\"save\">Save</button><button class=\"remove\">Remove</button></div></div>";
},"useData":true});

this["JST"]["edit_card_window"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-detail-labels\"><h5>Labels</h5><div class=\"label-list\"></div></div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-due-date\"><h5>Due Date</h5><div class=\"due-link\">"
    + container.escapeExpression((helpers.format_date || (depth0 && depth0.format_date) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.due : depth0),{"name":"format_date","hash":{},"data":data}))
    + "</div></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"comment\"><div class=\"comment-body\">"
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</div><div class=\"comment-date\">"
    + alias3((helpers.format_date || (depth0 && depth0.format_date) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"format_date","hash":{},"data":data}))
    + "</div></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal\"><div class=\"modal-content\"><header><textarea class=\"disabled\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></header><div class=\"close\"></div><main>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasLabels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"card-detail-description\"><h5>Description <a href=\"#\">Edit</a></h5><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><form action=\"#\"><textarea placeholder=\"Add a more detailed description...\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"add-footer\"><button type=\"submit\" class=\"add\">Save</button><div class=\"remove\"></div></div></form></div><div class=\"add-comment\"><h2>Add Comment</h2><form action=\"#\"><textarea rows=\"3\" placeholder=\"Write a comment...\"></textarea><button class=\"comment disabled\">Send</button></form></div><div class=\"comments\"><h2>Comments</h2>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></main><div class=\"sidebar\"><div class=\"card-detail-btn-group\"><h2>Add</h2><button class=\"edit-labels\">Labels</button><button class=\"due\">Due Date</button></div><div class=\"card-detail-btn-group\"><h2>Actions</h2><button disabled>Move</button><button disabled>Copy</button><button disabled>Subscribe</button><button class=\"delete\">Delete</button></div></div></div></div>";
},"useData":true});

this["JST"]["label_in_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"label\" title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\"></div>";
},"useData":true});

this["JST"]["label_in_modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"label\" title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["label_in_popup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"label-item-group\"><div class=\"label-item\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" style=\"background:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><div class=\"label-edit\"><div></div>";
},"useData":true});

this["JST"]["labels"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"labels-view\"><header>Labels</header><div class=\"close\"></div><div class=\"labels-section\"></div></div>";
},"useData":true});

this["JST"]["list_menu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"list-menu-view\"><header>List Actions</header><div class=\"close\"></div><div class=\"list-menu-section\"><div class=\"list-menu-item add\">Add Card...</div><div class=\"list-menu-item delete\">Delete This List</div></div></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><header><div class=\"list-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><div class=\"more\"></div><form action=\"#\"><textarea class=\"autoExpand\" rows=\"1\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea></form></header><div class=\"list-cards\"></div><a class=\"add-card\" href=\"#\"><footer>Add a card...</footer></a></div>";
},"useData":true});