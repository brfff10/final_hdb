###Set up virtualenv
virtualenv ~/topicos 
virtualenv %HOMEPATH%\topicos 
source ~/topicos/bin/activate       

###Install Django 
pip install Django==1.3.1 
python -m pip install cx_Oracle --upgrade
#pip install django_tables2
unzip oracle-xe-11.2.0-1.0.x86_64.rpm.zip 
sudo apt-get install alien libaio1 unixodbc vim
sudo alien --scripts -d oracle-xe-11.2.0-1.0.x86_64.rpm
sudo vim /sbin/chkconfig

Copy this into file:
---------------------------------------------------------
#!/bin/bash
# Oracle 11gR2 XE installer chkconfig hack for Ubuntu
file=/etc/init.d/oracle-xe
if [[ ! `tail -n1 $file | grep INIT` ]]; then
echo >> $file
echo '### BEGIN INIT INFO' >> $file
echo '# Provides: OracleXE' >> $file
echo '# Required-Start: $remote_fs $syslog' >> $file
echo '# Required-Stop: $remote_fs $syslog' >> $file
echo '# Default-Start: 2 3 4 5' >> $file
echo '# Default-Stop: 0 1 6' >> $file
echo '# Short-Description: Oracle 11g Express Edition' >> $file
echo '### END INIT INFO' >> $file
fi
update-rc.d oracle-xe defaults 80 01
-------------------------------------------------------

sudo chmod 755 /sbin/chkconfig
sudo nano /etc/sysctl.d/60-oracle.conf
Enter the following: 
-------------------------------------------------------
# Oracle 11g XE kernel parameters  
fs.file-max=6815744  
net.ipv4.ip_local_port_range=9000 65000  
kernel.sem=250 32000 100 128 
kernel.shmmax=536870912   <-------THIS SHOULD BE YOUR AVAILABLE RAM 
-------------------------------------------------------

sudo service procps restart  
sudo nano ~/.zshrc 
Enter the following at the end:
-------------------------------------------------------
export ORACLE_HOME=/u01/app/oracle/product/11.2.0/xe
export ORACLE_SID=XE
export NLS_LANG=`$ORACLE_HOME/bin/nls_lang.sh`
export ORACLE_BASE=/u01/app/oracle
export LD_LIBRARY_PATH=$ORACLE_HOME/lib:$LD_LIBRARY_PATH
export PATH=$ORACLE_HOME/bin:$PATH
-------------------------------------------------------

. ./.profile
sudo service oracle-xe start

###Create sysdba user
sqlplus sys as sysdba
