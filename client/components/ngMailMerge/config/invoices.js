var invoice = {
		'template': 'Invoice',
		'filename': 'valid{{ng}file-name-template.pdf',
		'outputfolder': 'output/valid{{ng}}folder-name-template',
		'frm': {
			'markup': " <div class='form-group'><label class='control-label col-sm-2'>To:</label><input class='form-control width-40' type='email'  ng-model='merge.email.to'> </div> <div class='form-group'><label class='control-label col-sm-2'>CC:</label><input class='form-control width-40' type='text' ng-model='merge.email.cc'> </div> <div class='form-group'><label class='control-label col-sm-2'>BCC:</label><input class='form-control width-40' type='text'  ng-model='merge.email.bcc'></div> <div class='form-group'><label class='control-label col-sm-2'>Subject:</label><input class='form-control width-40' type='text' ng-model='merge.email.subject'> </div> <div class='form-group'><label class='control-label col-sm-2'>Recipient code:</label><input class='form-control width-40' type='text' ng-change='update()' ng-model='merge.code'> </div><div class='form-group'><label class='control-label col-sm-2'>Name:</label><input class='form-control width-40' type='text' ng-change='update()' ng-model='merge.name'> </div> <div class='form-group'><label class='control-label col-sm-2'>Date:</label><p  class='input-group width-40'><input type='text' id='datepicker' class='form-control' uib-datepicker-popup ng-model='merge.date' ng-change='update()' is-open='popup.opened' datepicker-options='dateOptions' ng-required='true' close-text='Close' /><span class='input-group-btn'><button type='button' class='btn btn-default' ng-click='open()'><i class='glyphicon glyphicon-calendar'></i></button></span></p></div>"
		},
		'smtp': {
			'host': 'Email Server Host',
			'port': '25',
			'userid': 'From Email User ID',
			'userpassword': 'From Email Password',
			'usessl': false,
			'usetls': false,
			'debug': false,
			'fromaddress': 'from@emailaddress.com',
			'name': 'From Name'
		},
		'email': {
			'to': 'valid{{ng}template',
			'cc': '',
			'bcc': '',
			'subject': 'test',
			'text': "Hello,how are you {{merge.name}}, did you receive my invoice on {{merge.date| date:'yyyy-MM-dd' }}",
			'sendhtml': true,
			'sendEmail':true,
			'html': "<div>Dear <span style='color:red'>{{merge.name}}</span>:</div></br> <div>This is your recipient code  <span style='color:red'>{{merge.code}}</span> and here is your invoice on  <span style='color:red'>{{merge.date| date:'yyyy-MM-dd' }}</span></div><div><img src='http://www.bootstrapcss.com/images/bootstrap.png'></div>"
		},
		'doc': {
			'outputpdf': true,
			'attachpdf': true,
			'markup': "<div>Dear <span style='color:red'>{{merge.name}}</span>:</div></br> <div>recipient code <span style='color:red'>{{merge.code}}</span> invoice date <span style='color:red'>{{merge.date| date:'yyyy-MM-dd' }}</span></div>"
		}
};
