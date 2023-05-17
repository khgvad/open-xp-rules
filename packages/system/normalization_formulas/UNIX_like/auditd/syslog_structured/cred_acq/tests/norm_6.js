{
    "action": "login",
    "category.generic": "Operating System",
    "category.high": "Access Management",
    "category.low": "Communication",
    "chain_id": "1931",
    "dst.ip": "10.1.76.35",
    "event_src.category": "AAA",
    "event_src.ip": "10.1.76.35",
    "event_src.subsys": "auditd",
    "event_src.title": "unix_like",
    "id": "PT_UNIX_like_auditd_syslog_structured_cred_acq",
    "importance": "low",
    "labels": "node_contains_ext_ip",
    "logon_auth_method": "remote",
    "logon_service": "ssh",
    "msgid": "CRED_ACQ",
    "object": "system",
    "object.process.fullpath": "/usr/sbin/sshd",
    "object.process.id": "2017",
    "object.process.name": "sshd",
    "object.process.path": "/usr/sbin/",
    "reason": "PAM:setcred",
    "src.ip": "192.168.206.1",
    "status": "ongoing",
    "subject": "account",
    "subject.account.name": "jr",
    "subject.state": "acquired-credentials",
    "time": "2020-08-25T10:56:31.000Z"
}