'use strict';


module.exports = function(sequelize, DataTypes) {
  var Mail_Merge = sequelize.define('Mail_Merge', {

    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipientcode: DataTypes.STRING,
    template: DataTypes.STRING,
    filename: DataTypes.STRING,
    outputfolder: DataTypes.STRING,
    smtp_host: DataTypes.STRING,
    smtp_port: DataTypes.STRING,
    smtp_userid: DataTypes.STRING,
    smtp_userpassword: DataTypes.STRING,
    smtp_usessl: DataTypes.BOOLEAN,
    smtp_usetls: DataTypes.BOOLEAN,
    smtp_fromaddress: DataTypes.STRING,
    smtp_name: DataTypes.STRING,
    email_to: DataTypes.STRING,
    email_cc: DataTypes.STRING,
    email_bcc: DataTypes.STRING,
    email_subject: DataTypes.STRING,
    email_text: DataTypes.STRING,
    email_sendEmail: DataTypes.BOOLEAN,
    email_sendhtml: DataTypes.BOOLEAN,
    email_html: DataTypes.STRING,
    doc_outputpdf: DataTypes.STRING,
    doc_attachpdf: DataTypes.STRING,
    doc_markup: DataTypes.STRING,
    status: DataTypes.STRING,
    log: DataTypes.STRING,
    email_date:DataTypes.DATE

  });

  return Mail_Merge;
};
