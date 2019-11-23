# Give Me Money


## Rasberry PI set-up
### NodeWorker (Raspberry PI)
For Raspbian 10 (Debian 10)
```
sudo apt install arptables

sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
sudo update-alternatives --set arptables /usr/sbin/arptables-legacy
sudo update-alternatives --set ebtables /usr/sbin/ebtables-legacy
```