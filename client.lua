local function shutdownHandler()
    CreateThread(function()
        ShutdownLoadingScreenNui(true)
    end)
end
shutdownHandler()
exports('shutdown', shutdownHandler)