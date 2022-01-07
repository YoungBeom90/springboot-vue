let treeData;

let tree_Common = {
	init : async function init() { 
		//첫화면 파일트리 가져오기
		loadingStart();
		await axios.post("/axios/showFolderTree").then((res) => {
			if(res) {
				treeData = res.data.folderList
				for(let i in treeData){
					treeData[i].path = treeData[i].path.replaceAll("\\\\", "\\");
				}
				console.log("나는 treeData");
				console.log(treeData);
				
				globalFolderData = treeData;
				
				
				$('#jstree').jstree({
	       			plugins: ["contextmenu"],
			        core: {
						check_callback :  true,
						data : treeData,
						themes: {
	                        name: "default",
	                        dots: false,
	                        icons: false,
	                        responsive:true
						}
	        		},
					contextmenu : {		
						items : function(o, cb) {
							return {
								create : {
									seperator_before : false,
									seperator_after : true,
									label : "폴더생성",
									action : function(data) {
										let inst = $.jstree.reference(data.reference);
										obj = inst.get_node(data.reference);
										inst.create_node(obj, data, "last", function (new_node) {
											try {
												new_node.fname = "새 폴더";
												inst.edit(new_node);
												addFolderListener(o,new_node.id);
											} catch(ex) {
												alert(ex);
											}
										});
									},
									
								},
								rename : {
									seperator_before : false,
									seperator_after : true,
									label : "이름수정",
									action : function(data) {
										let temp;
										let inst = $.jstree.reference(data.reference);
										obj = inst.get_node(data.reference);
										
										try {
											inst.edit(obj)
											console.log(obj);
											
										} catch(ex) {
											alert(ex);
										}
										
										/*data.jstree("edit", obj);*/
									}
								},//rename end
								/*
								edit : {
									seperator_befor : false,
									seperator_after : true,
									label : "이동 및 복사",
									submenu : {
										copy : {
											seperator_befor : false,
											seperator_after : true,
											label : "복사",
											_disabled : false,
											action : function(data) {
												let inst = $.jstree.reference(data.reference);
												obj = inst.get_node(data.reference);
												console.log(obj);
												console.log(inst);
												console.log($.jstree.defaults.contextmenu.items[0]);
											}
										},//copy end
										move : {
											seperator_befor : false,
											seperator_after : true,
											label : "이동",
											action : function(data) {
												let inst = $.jstree.reference(data.reference);
												obj = inst.get_node(data.reference);
												console.log(inst);
											}
										},//move end
										paste : {
											seperator_befor : false,
											seperator_after : true,
											label : "붙여넣기",
											action : function(data) {
												let inst = $.jstree.reference(data.reference);
												obj = inst.get_node(data.reference);
											},
											_disabled : false
										}//paste end
									}//submenu end 
								}//edit end
							*/
							}
						}			
					},
			    }).bind("rename_node.jstree", function (e, data) {    
			    	renameFolderListener(data);
				})
				
				
				let firstDir = treeData[0].path.replaceAll("\\","\\\\");
				selectList(firstDir).then(() => {
					loadingEnd();
					
				});
			}
		}).catch((err) => {
			console.log(err);
		});
	},
	selectNode : function() {
		// 선택 된 노드 파일 리스트 생성
		$('#jstree').on("select_node.jstree", function (e, data) { 
			let selectID = data.node.id;
			selectID = selectID.substring(3);
			globalSelectFolder = selectID;
			selectID = selectID;
			console.log(selectID);
			selectList(selectID).then(() => {
				loadingEnd();
			});
			if($('#filePath').length === 0) {
				let html = "<input type='hidden' id='filePath' value='"+selectID+"' />";
				$("#sidebar").append(html);
			} else if($('#filePath').val() === selectID) {
				return;
			} else if($('#filePath').val() !== selectID) {
				$('#filePath').attr("value", selectID);
			}
		});
		
	},
	doubleClick : function() {
		$('#jstree').bind("dblclick.jstree", function(e, data) {
			console.log(e.target);
			let getPath = e.target.id.replace("_anchor", "");
			getPath = getPath.substr(3);
			console.log("경로");
			console.log(getPath);
		});
	},
	loadedTree : function() {
		$("#jstree").on("loaded.jstree", function() {
			$(".jstree-anchor").addClass('jstree-clicked');
			$(".jstree-clicked").trigger("click");
		});
	}
	,
	treeRefresh : function() {
		axios.post("/axios/showFolderTree").then((res) => {
			if(res) {
				
				$('#jstree').jstree(true).settings.core.data = res.data.folderList;
				$('#jstree').jstree(true).refresh();
				console.log("완료");
			}
			
			
		});
	}
}






