# Give Me Money


## Rasberry PI set-up
### WorkerNode (Raspberry PI)
For Raspbian 10 (Debian 10)

- Swap need to be disbled for kubeadm to run correctly.

```sh
sudo swapoff -a
sudo systemctl disable dphys-swapfile.service
```

- Since latest kubeadm is not compatible with nftables, we have to change it to use legacy iptables. [See more detail](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#ensure-iptables-tooling-does-not-use-the-nftables-backend)

```sh
sudo apt install arptables

sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
sudo update-alternatives --set arptables /usr/sbin/arptables-legacy
sudo update-alternatives --set ebtables /usr/sbin/ebtables-legacy
```